/** @param {NS} ns */
export async function main(ns) {
  var ownedservers = ns.getServerMaxRam('home');
ns.tprint(ownedservers)
}