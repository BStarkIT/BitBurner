/** @param {NS} ns */
export async function main(ns) {
    ns.disableLog('ALL');
    ns.tail();
    var sleeptime = 30000;
    var maxskill = 90000;
    var hackskill = ns.getHackingLevel();
    const programs = ns.singularity.getDarkwebPrograms();
    var hacknetmaxcores = 30;
    var hacknetmaxram = 8192;
    var hacknetmaxlevel = 200;
    var hacknetmaxcache = 15;
    var hackernetmaxnodes = 10;
    while (hackskill < maxskill) {
        var sto = false
        var crime = false
        var make = false
        var hac = false
        var earn = false
        var location = ""
        var item = ""
        var hpm = 0
        var hpn = 0
        var temp = 0
        var temp2 = 0
        var crimeList = [];
        var currentnodes = ns.hacknet.numNodes()
        var node = 0
        var hostname = "Vork-";
        var ownedservers = ns.getPurchasedServers();
        var maxservers = ns.getPurchasedServerLimit();
        var a = 0
        var b = 0;
        var c = 0;
        var cityaugs = 0
        var serverInfo = [];
        var botnetservers = [];
        var templist = [];
        var primarytargets = [];
        var factionList = [];
        var i = 0;
        var cash = ns.getServerMoneyAvailable('home')
        var augment = ""
        var companyName = ""
        var city = ""
        var info = ns.getPlayer()
        var installed = ns.singularity.getOwnedAugmentations(true)
        var city1 = 0
        var city2 = 0
        var city3 = 0
        var city4 = 0
        var ccity1 = 0
        var ccity2 = 0
        var ccity3 = 0
        var ccity4 = 0
        var action = ns.singularity.isBusy()
        var currentWork = ns.singularity.getCurrentWork()
        var hackskill = ns.getHackingLevel();
        var membership = info.factions;
        const upgradeName = "Sell for Money"
        while (ns.hacknet.numHashes() > ns.hacknet.hashCost(upgradeName)) {
            ns.hacknet.spendHashes(upgradeName);
        }
        var installs = installed.length
        if (installs <= 10) {
            var level = 10
        }
        else {
            if (installs <= 50) {
                var level = 100
            }
            else {
                if (installs <= 75) {
                    var level = 250
                }
                else {
                    var level = 500
                }
            }
        }
        let servers = ['home'];
        for (const server of servers) {
            const found = ns.scan(server);
            if (server != 'home') found.splice(0, 1);
            servers.push(...found);
        }
        var teir = 0;
        if (ns.fileExists("BruteSSH.exe")) {
            teir++;
        };
        if (ns.fileExists("FTPCrack.exe")) {
            teir++;
        };
        if (ns.fileExists("RelaySMTP.exe")) {
            teir++;
        };
        if (ns.fileExists("HTTPWorm.exe")) {
            teir++;
        };
        if (ns.fileExists("SQLInject.exe")) {
            teir++;
        };
        if (hackskill > 1000) {
            var script = "action2.js"
        }
        else {
            var script = "action.js"
        }
        if (teir != 5) {
            var program = "1"
            var cost = 0
            var info = ns.getPlayer()
            if (info.skills.hacking >= 50) {
                if (info.skills.hacking >= 75) {
                    if (info.skills.hacking >= 100) {
                        if (info.skills.hacking >= 200) {
                            if (info.skills.hacking >= 343) {
                                if (info.skills.hacking >= 500) {
                                    if (info.skills.hacking >= 750) {
                                        if (!ns.fileExists("SQLInject.exe")) {
                                            var program = "SQLInject.exe"
                                            var cost = 250000000
                                        }
                                    }
                                    if (!ns.fileExists("HTTPWorm.exe")) {
                                        var program = "HTTPWorm.exe"
                                        var cost = 30000000
                                    }
                                }
                                if (!ns.fileExists("DeepscanV2.exe")) {
                                    var program = "DeepscanV2.exe"
                                    var cost = 25000000
                                }
                            }
                            if (!ns.fileExists("relaySMTP.exe")) {
                                var program = "relaySMTP.exe"
                                var cost = 5000000
                            }
                        }
                        if (!ns.fileExists("FTPCrack.exe")) {
                            var program = "FTPCrack.exe"
                            var cost = 1500000
                        }
                    }
                    if (!ns.fileExists("ServerProfiler.exe")) {
                        var program = "ServerProfiler.exe"
                        var cost = 1000000
                    }
                    else {
                        if (!ns.fileExists("DeepscanV1.exe")) {
                            var program = "DeepscanV1.exe"
                            var cost = 500000
                        }
                    }
                }
                if (!ns.fileExists("BruteSSH.exe")) {
                    var program = "BruteSSH.exe"
                    var cost = 500000
                }
            }
            else {
                var program = "AutoLink.exe"
                var cost = 1000000
            }
            if (program != "1") {
                if (cash > cost) {
                    if (!ns.hasTorRouter()) {
                        if (cash > 200000) {
                            ns.singularity.purchaseTor()
                        }
                    }
                    if (cost < cash) {
                        const success = ns.singularity.purchaseProgram(program);
                        if (success) {
                            var message = "bought " + program
                            ns.toast(message)
                        }
                    }
                }
                else {
                    var make = true
                }
            }
        }

        servers.forEach(
            (target) => {
                if ((target === "darkweb") || (target.includes("hacknet-"))) {
                    ns.print(target)
                }
                else {
                    if (ns.hasRootAccess(target)) {
                        var info = ns.getServer(target)
                        if (info.purchasedByPlayer == false) {
                            if (info.backdoorInstalled == false) {
                                ns.tprint("info: needed " + target)
                                if (!ns.scriptRunning("Batteringram.js", 'home')) {
                                    ns.exec("Batteringram.js", 'home', 1, target)
                                }
                                else {
                                    ns.tprint("ERROR: " + target + " Needs access, awaiting battering ram");
                                }
                            }

                            else {
                                var infolist = "info" + i;
                                var servermaxcash = ns.getServerMaxMoney(target);
                                var servermaxbank = Math.trunc(servermaxcash);
                                var servercurrentcash = ns.getServerMoneyAvailable(target);
                                var servercurrentbank = Math.trunc(servercurrentcash);
                                var serverminsecurity = ns.getServerMinSecurityLevel(target);
                                var servercurrentsecurity = ns.getServerSecurityLevel(target);
                                var serverram = ns.getServerMaxRam(target);
                                if (target != 'home') {
                                    infolist = new Object();
                                    infolist.name = target;
                                    infolist.bank = servermaxbank;
                                    infolist.cash = servercurrentbank;
                                    infolist.safe = serverminsecurity;
                                    infolist.security = servercurrentsecurity;
                                    infolist.ram = serverram;
                                    serverInfo.push(infolist);
                                }
                                if (serverram != 0) {
                                    botnetservers.push(target);
                                }
                            }
                        }
                        i++;
                    }
                    else {
                        var targetskill = ns.getServerRequiredHackingLevel(target);
                        var ports = ns.getServerNumPortsRequired(target);
                        if (ports <= teir) {
                            if (hackskill >= targetskill) {
                                if (teir == 5) {
                                    ns.sqlinject(target);
                                    ns.httpworm(target);
                                    ns.relaysmtp(target);
                                    ns.ftpcrack(target);
                                    ns.brutessh(target);
                                };
                                if (teir == 4) {
                                    ns.httpworm(target);
                                    ns.relaysmtp(target);
                                    ns.ftpcrack(target);
                                    ns.brutessh(target);
                                };
                                if (teir == 3) {
                                    ns.relaysmtp(target);
                                    ns.ftpcrack(target);
                                    ns.brutessh(target);
                                };
                                if (teir == 2) {
                                    ns.ftpcrack(target);
                                    ns.relaysmtp(target);
                                };
                                if (teir == 1) {
                                    ns.ftpcrack(target);
                                };
                                ns.nuke(target);
                                ns.scp("action.js", target, "home");
                                ns.scp("action2.js", target, "home");
                                ns.tprint("New server : " + target);
                            };
                        };
                    }
                }
            }
        )
        serverInfo.sort((a, b) => parseInt(b.bank, 10) - parseInt(a.bank, 10));
        serverInfo.forEach(
            (primarytarget) => {
                templist = new Object();
                templist = primarytarget.name;
                primarytargets.push(templist);
            }
        )
        if (botnetservers.length > 0) {
            botnetservers.forEach(
                async (bot) => {
                    if (bot.includes("hacknet-")) {
                        ns.print(bot)
                    }
                    else {
                        if (!ns.scriptRunning(script, bot)) {
                            var ram = ns.getServerMaxRam(bot)
                            var max = primarytargets.length / 2
                            var half = Math.trunc(max)
                            const minCeiled = Math.ceil(0);
                            const maxFloored = Math.floor(half);
                            var guess = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
                            var victum = primarytargets[guess]
                            if (bot == 'home') {
                                ram = ram - 256
                            }
                            var use = ns.getScriptRam(script, bot);
                            var count = ram / use
                            var times = Math.trunc(count)
                            var cores = cores + times
                            if (times > 1000000) { times = 1000000 }
                            if (times <= 1) {
                                ns.exec(script, bot, 1, victum);
                            }
                            else {
                                ns.exec(script, bot, times, victum);
                            }
                        }
                    }
                }
            );
        }
        membership.forEach(
            (member) => {
                var factionaugments = ns.singularity.getAugmentationsFromFaction(member)
                factionaugments.forEach(
                    (augment) => {
                        if ((augment == "NeuroFlux Governor") || (augment == "Hydroflame Left Arm") || (augment == "The Red Pill")) {
                        }
                        else {
                            var templist = "info" + b;
                            templist = new Object();
                            templist.member = member;
                            templist.augment = augment;
                            if (!installed.includes(augment)) {
                                factionList.push(templist);
                            }
                        }
                    }
                )
            }
        )
        if (factionList.length == 0) {
            if (info.skills.hacking > 5000) {
                ns.tprint(" High skills - NeuroFlux Governor recomended")
                var aug = "NeuroFlux Governor";
                var rep = ns.singularity.getFactionRep("CyberSec")
                var needed = ns.singularity.getAugmentationRepReq(aug)
                var price = ns.singularity.getAugmentationPrice(aug)
                var cash = ns.getServerMoneyAvailable('home')
                if (rep < needed) {
                    ns.singularity.workForFaction("CyberSec", "hacking", false)
                }
                else {
                    ns.singularity.purchaseAugmentation("CyberSec", aug)
                }
            }
            else {
                membership.forEach(
                    (group) => {
                        if (group == "Four Sigma") { city1++ }
                        if (group == "Blade Industries") { city1++ }
                        if (group == "MegaCorp") { city1++ }
                        if (group == "Bachman & Associates") { city2++ }
                        if (group == "Clarke Incorporated") { city2++ }
                        if (group == "ECorp") { city2++ }
                        if (group == "OmniTek Incorporated") { city3++ }
                        if (group == "NWO") { city3++ }
                        if (group == "KuaiGong International") { city4++ }
                        if (group == "Fulcrum Secret Technologies") { city4++ }
                    }
                )
                if (city1 == 0) {
                    var earn = true
                    var companyName = "Four Sigma";
                    var location = "Sector-12"
                }
                if (city1 == 1) {
                    var earn = true
                    var companyName = "Blade Industries";
                    var location = "Sector-12"
                }
                if (city1 == 2) {
                    var earn = true
                    var companyName = "MegaCorp";
                    var location = "Sector-12"
                }
                if (city1 == 3) {
                    if (city2 == 0) {
                        var earn = true
                        var companyName = "Bachman & Associates";
                        var location = "Aevum"
                    }
                    if (city2 == 1) {
                        var earn = true
                        var companyName = "Clarke Incorporated";
                        var location = "Aevum"
                    }
                    if (city2 == 2) {
                        var earn = true
                        var companyName = "ECorp";
                        var location = "Aevum"
                    }
                    if (city2 == 3) {
                        if (city3 == 0) {
                            var earn = true
                            var companyName = "OmniTek Incorporated";
                            var location = "Volhaven"
                        }
                        if (city3 == 1) {
                            var earn = true
                            var companyName = "NWO";
                            var location = "Volhaven"
                        }
                        if (city3 == 2) {
                            if (city4 == 0) {
                                var earn = true
                                var companyName = "KuaiGong International";
                                var location = "Chongqing"
                            }
                            if (city4 == 1) {
                                var earn = true
                                var companyName = "Fulcrum Technologies";
                                var location = "Chongqing"
                            }
                            if (city4 == 2) {

                                installed.forEach(
                                    (augment) => {
                                        if (augment == "CashRoot Starter Kit") { cityaugs++ }
                                        if (augment == "PCMatrix") { cityaugs++ }
                                        if (augment == "DermaForce Particle Barrier") { cityaugs++ }
                                        if (augment == "Neuregen Gene Modification") { cityaugs++ }
                                        if (augment == "NutriGen Implant") { cityaugs++ }
                                        if (augment == "INFRARET Enhancement") { cityaugs++ }
                                    })
                                if (cityaugs == 0) { var city = "Sector-12"; }
                                if (cityaugs == 1) { var city = "Aevum"; }
                                if (cityaugs == 2) { var city = "Volhaven"; }
                                if (cityaugs == 3) { var city = "Chongqing"; }
                                if (cityaugs == 4) { var city = "New Tokyo"; }
                                if (cityaugs == 5) { var city = "Ishima"; }
                            }
                        }
                    }
                }
            }
        }
        if (currentnodes < hackernetmaxnodes) {
            var nodecost = ns.hacknet.getPurchaseNodeCost()
            if (nodecost < cash) {
                ns.hacknet.purchaseNode()
                var currentnodes = ns.hacknet.numNodes()
            }
        }
        while (node != currentnodes) {
            var current = ns.hacknet.getNodeStats(node);
            if (current.ram != hacknetmaxram) {
                var ramcost = ns.hacknet.getRamUpgradeCost(node, 1);
            }
            else {
                var ramcost = 0
            };
            if ((ramcost < cash) && (ramcost != 0)) {
                ns.hacknet.upgradeRam(node, 1);
                var cash = ns.getServerMoneyAvailable("home");
            }
            if (current.level != hacknetmaxlevel) {
                var levelcost = ns.hacknet.getLevelUpgradeCost(node, 10);
            }
            else {
                var levelcost = 0
            };
            if ((levelcost < cash) && (levelcost != 0)) {
                ns.hacknet.upgradeLevel(node, 10);
                var cash = ns.getServerMoneyAvailable("home");
            };
            if (current.cores != hacknetmaxcores) {
                var corecost = ns.hacknet.getCoreUpgradeCost(node, 1);
            }
            else {
                var corecost = 0;
            }
            if ((corecost < cash) && (corecost != 0)) {
                ns.hacknet.upgradeCore(node, 1);
                var cash = ns.getServerMoneyAvailable("home");
            }
            if (current.cache != hacknetmaxcache) {
                var cachecost = ns.hacknet.getCacheUpgradeCost(node, 1)
            }
            else {
                var cachecost = 0;
            }
            if ((cachecost < cash) && (cachecost != 0)) {
                ns.hacknet.upgradeCache(node, 1);
                var cash = ns.getServerMoneyAvailable("home");
            }
            var nodestat = ns.hacknet.getNodeStats(node)
            var hpn = nodestat.production
            var temp = temp2 + hpn
            var temp2 = temp
            node++
        }
        var cash = ns.getServerMoneyAvailable("home");
        var hammer = primarytargets[0]
        var nail = primarytargets[1]
        if (!nail == null) {
            if (!ns.scriptRunning(script, 'home')) {
                var ram = ns.getServerMaxRam('home') - 128
                var use = ns.getScriptRam(script, 'home');
                var count = ram / use
                var times = Math.trunc(count)
                var cores = cores + times
                if (times > 1000000) { times = 1000000 }
                if (times <= 1) {
                    ns.exec(script, 'home', 1, nail);
                }
                else {
                    ns.exec(script, 'home', times, nail);
                }
            }
        }


        ownedservers.forEach(
            (ownedserver) => {
                if (!ns.scriptRunning(script, ownedserver)) {
                    var ram = ns.getServerMaxRam(ownedserver)
                    var use = ns.getScriptRam(script, ownedserver);
                    var count = ram / use
                    var times = Math.trunc(count)
                    var cores = cores + times
                    if (times > 1000000) { times = 1000000 }
                    if (times <= 1) {
                        ns.exec(script, ownedserver, 1, hammer);
                    }
                    else {
                        ns.exec(script, ownedserver, times, hammer);
                    }
                }
                a++
            }
        )
        if (a == 0) {
            var serverram = '2048'
        }
        if (a == 1) {
            var serverram = '4096'
        }
        if (a == 2) {
            var serverram = '8192'
        }
        if (a == 3) {
            var serverram = '16384'
        }
        if (a == 4) {
            var serverram = '32768'
        }
        if (a == 5) {
            var serverram = '65536'
        }
        if (a >= 5) {
            var serverram = '131072'
        }
        if (a >= 10) {
            var serverram = '262144'
        }
        if (a >= 15) {
            var serverram = '524288'
        }
        if (a >= 20) {
            var serverram = '1048576'
        }
        if (a == 25) {
            ownedservers.forEach(
                (ownedserver) => {
                    var serverram = '1048576'
                    var current = ns.getServerMaxRam(ownedserver)
                    if (current != serverram) {
                        var servercost = ns.getPurchasedServerUpgradeCost(ownedserver, serverram)
                        var cash = ns.getServerMoneyAvailable("home");
                        if (cash > servercost) {
                            ns.upgradePurchasedServer(ownedserver, serverram)
                        }
                    }
                }
            )
        }
        var servercost = ns.getPurchasedServerCost(serverram);
        if (a != maxservers) {
            if (cash > servercost) {
                var host = hostname + a
                var message = "bought Server " + host
                ns.purchaseServer(host, serverram);
                ns.scp("action.js", host, "home");
                ns.scp("action2.js", host, "home");
            }
            else {
                ns.toast("Server " + a + " cost " + servercost)
            }
        }
        if (factionList.length != 0) {
            var recomended = factionList[0].member
            var item = factionList[0].augment
            var factionrep = ns.singularity.getFactionRep(recomended)
            var augmentrep = ns.singularity.getAugmentationRepReq(item)
            if (factionrep < augmentrep) {
                try {
                    if (trades.includes("hacking")) {
                        var hac = true
                    }
                    else {
                        var altwork = trades[0]
                        var alt = true
                    }
                }
                catch {
                    var done = true
                }
            }
            else {
                var price = ns.singularity.getAugmentationPrice(item)
                var cash = ns.getServerMoneyAvailable('home')
                ns.print("Item " + item + " price " + price + " faction " + recomended)
                if (cash > price) {
                    ns.singularity.purchaseAugmentation(recomended, item)
                }
                else {
                    var earn = true
                }
            }
        }
        var crimes = []
        var karm = info.karma
        if (!membership.includes == "Slum Snakes") {
            var location = "Sector-12"
            if (karm < -9) {
                var crime = true
                var crimes = ["Assassination", "Bond Forgery", "Deal Drugs", "Grand Theft Auto", "Heist", "Homicide", "Kidnap", "Larceny", "Mug", "Traffick Arms"]
            }

        }
        else {
            if (!membership.includes == "Tetrads") {
                if (karm < -18) {
                    var crime = true
                    var location = "Chongqing"
                    var crimes = ["Assassination", "Bond Forgery", "Deal Drugs", "Grand Theft Auto", "Heist", "Homicide", "Kidnap", "Mug", "Traffick Arms"]
                }
            }
            else {
                if (!membership.includes == "The Dark Army") {
                    var crimes = ["Assassination", "Homicide"]
                    var crime = true
                }
                else {
                    if (!membership.includes == "Speakers for the Dead") {
                        var crimes = ["Assassination", "Homicide"]
                        var crime = true
                    }
                    else {
                        if (!membership.includes == "The Syndicate") {
                            var crime = true
                            var location = "Sector-12"
                            var crimes = ["Assassination", "Bond Forgery", "Deal Drugs", "Grand Theft Auto", "Heist", "Homicide", "Kidnap", "Larceny", "Mug", "Rob Store", "Shoplift", "Traffick Arms"]
                        }
                        else {
                            if (!membership.includes == "Silhouette") {
                                if (karm < -22) {
                                    var crime = true
                                    var crimes = ["Assassination", "Bond Forgery", "Deal Drugs", "Grand Theft Auto", "Heist", "Homicide", "Kidnap", "Larceny", "Mug", "Rob Store", "Shoplift", "Traffick Arms"]
                                }
                                else {
                                    var earn = false
                                    var hac = false
                                    var alt = false
                                    var crime = false
                                }
                                var location = "Aevum"
                            }
                        }
                    }
                }
            }
        }
        if (crimes.length > 0) {
            crimes.forEach(
                (crime) => {
                    var list = ns.singularity.getCrimeChance(crime)
                    if (list => 0.75) {
                        var xp = ns.singularity.getCrimeStats(crime)
                        let profit = xp.money
                        let time = xp.time
                        let val = time / profit
                        var templist2 = "info" + c;
                        templist2 = new Object();
                        templist2.name = crime;
                        templist2.val = val;
                        crimeList.push(templist2);
                    }
                }
            )
            crimeList.sort(function (a, b) { return b.val - a.val });
            var law = crimeList[0].name

        }
        if (level > info.skills.agility) {
            ns.singularity.stopAction
            ns.singularity.gymWorkout("powerhouse gym", 'agility', false)
        }
        else {
            if (level > info.skills.agility) {
                ns.singularity.stopAction
                ns.singularity.gymWorkout("powerhouse gym", 'agility', false)
            }
            else {
                if (level > info.skills.defense) {
                    ns.singularity.stopAction
                    ns.singularity.gymWorkout("powerhouse gym", 'defense', false)
                }
                else {
                    if (level > info.skills.dexterity) {
                        ns.singularity.stopAction
                        ns.singularity.gymWorkout("powerhouse gym", 'dexterity', false)
                    }
                    else {
                        if (level > info.skills.strength) {
                            ns.singularity.stopAction
                            ns.singularity.gymWorkout("powerhouse gym", 'strength', false)
                        }
                        else {
                            if (level > info.skills.charisma) {
                                ns.singularity.stopAction
                                ns.singularity.universityCourse("rothman university", "Leadership course", false)
                            }
                            else {
                                var action = ns.singularity.isBusy()
                                var task = ns.singularity.getCurrentWork()
                                if (make == true) {
                                    if (action == false) {
                                        ns.singularity.createProgram(program, false)
                                    }
                                    else {
                                        if (task.type != "CREATE_PROGRAM") {
                                            ns.singularity.stopAction
                                            ns.singularity.createProgram(program, false)
                                        }
                                    }
                                }
                                else {
                                    if (action == true) {
                                        ns.singularity.stopAction
                                    }
                                    if (hac == true) {
                                        var trades = ns.singularity.getFactionWorkTypes(recomended)
                                        if (trades.includes("hacking")) {
                                            ns.singularity.workForFaction(recomended, "hacking", false)
                                        }
                                        else {
                                            ns.singularity.workForFaction(recomended, trades[0], false)
                                        }
                                    }
                                    else {
                                        if (earn == true) {
                                            if (companyName == "") {
                                                if (location != "") {
                                                    var dest = info.city
                                                    if (dest != location) {
                                                        ns.tprint("wrong city")
                                                        ns.singularity.travelToCity(location)
                                                    }
                                                }
                                                if (info.city == "Sector-12") { companyName = "MegaCorp" }
                                                if (info.city == "Ishima") { companyName = "Nova Medical" }
                                                if (info.city == "New Tokyo") { companyName = "VitaLife" }
                                                if (info.city == "Aevum") { companyName = "Bachman & Associates" }
                                                if (info.city == "Volhaven") { companyName = "OmniTek Incorporated" }
                                                if (info.city == "Chongqing") { companyName = "KuaiGong International" }
                                            }

                                            ns.singularity.stopAction
                                            ns.singularity.applyToCompany(companyName, "IT")
                                            try {
                                                ns.singularity.workForCompany(companyName, false);
                                            }
                                            catch {

                                            }
                                        }
                                        else {
                                            if (done = true) {
                                                ns.singularity.workForFaction("CyberSec", "hacking", false)
                                            }
                                            else {
                                                if (alt == true) {
                                                    ns.singularity.workForFaction(recomended, altwork, false)
                                                }
                                                else {
                                                    if (crime == true) {
                                                        ns.singularity.commitCrime(law, false)
                                                    }
                                                    else {
                                                        if (city != "") {
                                                            var dest = info.city
                                                            if (dest != city) {
                                                                ns.tprint("wrong city")
                                                                ns.singularity.travelToCity(city)
                                                            }
                                                            else {
                                                                var invites = ns.singularity.checkFactionInvitations()
                                                                invites.forEach(
                                                                    (invit) => {
                                                                        if (invit == city) {
                                                                            ns.singularity.joinFaction(invit)
                                                                        }
                                                                    }
                                                                )
                                                            }
                                                        }
                                                        else {
                                                            if (!info.city == "Aevum") {
                                                                ns.singularity.travelToCity(city)
                                                            }
                                                            companyName = "Watchdog Security"
                                                            var currep = ns.singularity.getCompanyRep(companyName)
                                                            if (currep >= 8000) {
                                                                ns.singularity.applyToCompany(companyName, "agent")
                                                            }
                                                            else {
                                                                ns.singularity.applyToCompany(companyName, "IT")
                                                            }
                                                            ns.singularity.workForCompany(companyName, false);

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (teir == 5) {
            var skil = []
            var phack = info.skills.hacking
            skil.push(phack)
            var pstr = info.skills.strength
            skil.push(pstr)
            var pdef = info.skills.defense
            skil.push(pdef)
            var pdex = info.skills.dexterity
            skil.push(pdex)
            var pagi = info.skills.agility
            skil.push(pstr)
            var pch = info.skills.charisma
            skil.push(pch)
            skil.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
            var cskill = skil[0]

        }
        if (cskill > 500) {
            if (!ns.scriptRunning("stocks.js", 'home')) {
                ns.tprint("stockcheck")
                var sdata = ns.stock.has4SData()
                var api = ns.stock.has4SDataTIXAPI()
                var acces = ns.stock.hasTIXAPIAccess()
                var wse = ns.stock.hasWSEAccount()
                if (wse == false) {
                    ns.tprint("wse missing")
                    if (cash >= 200000000) {
                        ns.stock.purchaseWseAccount()
                    }
                }
                else {
                    if (api == false) {
                        ns.tprint("api missing")
                        if (cash >= 5000000000) {
                            ns.stock.purchaseTixApi()
                        }
                    }
                    else {
                        if (acces == false) {
                            ns.tprint("access missing")
                            if (cash >= 100000000000) {
                                ns.stock.purchase4SMarketDataTixApi()
                            }
                        }
                        else {
                            if (sdata == false) {
                                ns.tprint("sdata missing")
                                if (cash >= 5000000000) {
                                    ns.stock.purchase4SMarketData()
                                }
                            }
                            else {
                                ns.tprint("stock")
                                ns.exec("stocks.js", 'home', 1)
                                var sto = true
                            }
                        }
                    }
                }
            }
            else {
                var sto = true
            }
        }
        var action = ns.singularity.isBusy()
        var currentWork = ns.singularity.getCurrentWork()
        var bankballance = Math.trunc(cash);
        var hpm = Math.trunc(temp2)
        var temp3 = temp2 / 4
        var dpm = Math.trunc(temp3)
        ns.clearLog()
        if (sto == true) {
            ns.print("===========================================")
            ns.print(" Playing stock market")
        }
        ns.print("===========================================")
        ns.print("Sector-12 " + city1 + " out of 3")
        ns.print("Aevum " + city2 + " out of 3")
        ns.print("Volhaven " + city3 + " out of 2")
        ns.print("Chongqing " + city4 + " out of 2")
        ns.print(cityaugs + " out of 5 Cities")
        ns.print("===========================================")
        ns.print("Currently in " + info.city)
        if (action == true) {
            var workload = currentWork.type
            if (workload == "COMPANY") {
                var employer = currentWork.companyName
                ns.print("Currently at working at " + employer)
            }
            if (workload == "CREATE_PROGRAM") {
                ns.print("Currently making " + program)
            }
            if (workload == "FACTION") {
                var employer = currentWork.factionName
                ns.print("Currently hacking for " + employer)
            }
            if (workload == "CLASS") {
                var employer = currentWork.factionName
                ns.print("Currently learning")
            }
            if (workload == "CRIME") {
                ns.print(law)
            }
            if (workload == "GRAFTING") {
                ns.print("GRAFTING")
            }
        }
        if (item != "") {
            ns.print("wanting to buy " + item)
            var cos = ns.singularity.getAugmentationPrice(item)
            var bal = cash - cos
            var bal1 = Math.trunc(bal)
            if (bal1 > 0) {
                ns.print("working for rep")
            }
            else {
                ns.print(ns.formatNumber(bal1, 3, 1000) + " left to earn")
            }
            ns.print("===========================================")
        }
        if (teir < 5) {
            ns.print("teir set at: " + teir + " | Target set at: " + level)
        }
        else {
            ns.print(" Target: " + level + "   | Current level : " + cskill)
        }
        ns.print("===========================================")
        ns.print(" Servers owned |  hacknet nodes")
        ns.print("  " + a + " of " + maxservers + "       |     " + currentnodes + " of " + hackernetmaxnodes)
        ns.print("===========================================")
        ns.print("making " + hpm + " H/s  | $" + (ns.formatNumber(dpm, 3, 1000)) + " /s")
        ns.print("===========================================")
        ns.print("Cash is: " + ns.formatNumber(bankballance, 3, 1000))
        ns.print("===========================================")
        await ns.sleep(sleeptime)
        ns.clearLog()
        var invites = ns.singularity.checkFactionInvitations()
        if (invites.length > 0) {
            invites.forEach(
                (invite) => {
                    var enemies = ns.singularity.getFactionEnemies(invite)
                    if (enemies.length == 0) {
                        ns.singularity.joinFaction(invite)
                    }
                }
            )
        }
        ns.exec("solver.js", 'home', 1)
    }
}
