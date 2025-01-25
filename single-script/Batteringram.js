/** @param {NS} ns **/
export async function main(ns) {
	var count = 0
	ns.disableLog('ALL');
	const [silent = false] = ns.args;
	const servers = GetAllServers(ns);
	for (const server of servers) {
		let so = ns.getServer(server.name);
		if (so.requiredHackingSkill > ns.getHackingLevel()) {
			continue;
		}
		if (so.backdoorInstalled) {
			continue;
		}
		if ((so === "home") || (so === "darkweb")) {
		}
		else {
			for (const node of server.route) {
				if (!ns.singularity.connect(node)) {
					if (!silent)
						ns.tprint('ERROR: Could not connect to ' + node);
				}
				else {
					ns.tprint('INFO: Connected to ' + node);
				}
			}
			if ((so === "home") || (so === "darkweb")) {
			}
			else {
				ns.tprint('INFO: Installing backdoor on ' + server.name);
				try {
					await ns.singularity.installBackdoor();
				}
				catch { }
				so = ns.getServer(server.name);
				if (so.backdoorInstalled == false) {
					if (!silent)
						ns.tprint('ERROR: Failed to install backdoor on ' + server.name);
				}
				else {
					ns.tprint('SUCCESS: Installed backdoor on ' + server.name);
				}
				count++;
			}
			ns.tprint('INFO: Done installing backdoors on ' + count + ' servers');
			ns.singularity.connect('home');
			ns.tprint('SUCCESS: Done.');
			ns.rm("stable.txt", 'home')
		}
	}
}

export function GetAllServers(ns, root = 'home', found = new Array(), route = new Array()) {
	if (!found.find(p => p.name == root)) {
		let entry = new Object();
		entry.name = root;
		entry.route = route;
		entry.route.push(root);
		found.push(entry);
	}
	for (const server of ns.scan(root)) {
		if (!found.find(p => p.name == server)) {
			let newRoute = route.map(p => p);
			GetAllServers(ns, server, found, newRoute);
		}
	}
	return [...found];
}