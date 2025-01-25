/** @param {NS} ns */
export async function main(ns) {
const upgradeName = "Sell for Money"
        while (ns.hacknet.numHashes() > ns.hacknet.hashCost(upgradeName)) {
            ns.hacknet.spendHashes(upgradeName);
        }
}