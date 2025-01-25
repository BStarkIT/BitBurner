/** @param {NS} ns */
export async function main(ns) {
  var b = 0;
  var installed = ns.singularity.getOwnedAugmentations(true)
  var info = ns.getPlayer()
          var factionList = [];
  var membership = info.factions;
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
  var group = factionList.member
  try {var trades = ns.singularity.getFactionWorkTypes(group)
  
  }
  
catch {
var trades = "fail"
}
ns.tprint(trades)
}