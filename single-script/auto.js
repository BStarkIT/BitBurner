/** @param {NS} ns */
export async function main(ns) {
    if (!ns.scriptRunning("Vork.js", 'home')) {
      ns.exec("Vork.js", 'home', 1)
    }
}