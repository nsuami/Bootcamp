const Queue = require("./Queue");

class StarshipEnterprise {
  constructor(officerId = null, officerName = null, reportTo = null) {
    this.officerId = officerId;
    this.officerName = officerName;
    this.reportTo = reportTo; // the officer that the new officer reports to
    this.leftReport = null;
    this.rightReport = null;
  }

  assignOfficer(officerId, officerName) {
    // your solution here
    if (!this.officerId) {
      this.officerId = officerId;
      this.officerName = officerName;
    } else if (officerId < this.officerId) {
      if (!this.leftReport) {
        this.leftReport = new StarshipEnterprise(officerId, officerName, this);
      } else {
        this.leftReport.assignOfficer(officerId, officerName);
      }
    } else {
      if (!this.rightReport) {
        this.rightReport = new StarshipEnterprise(officerId, officerName, this);
      } else {
        this.rightReport.assignOfficer(officerId, officerName);
      }
    }
  }

  // Rank 1:                  10 Captain Picard
  //                        /                  \
  // Rank 2:        6 Commander Riker       11 Commander Data
  //                   /         \               \
  // Rank 3:    4 Lt. Cmdr.      7 Lt. Cmdr.     12 Lt. Cmdr.
  //             Worf           LaForge           Crusher
  //                   \                           \
  // Rank 4:      5 Lieutenant                  13 Lieutenant
  //               security-officer                    Selar

  findOfficersWithNoDirectReports(node = this) {
    // your solution here
    let values = [];
    if (node.leftReport) {
      values = [...values, ...node.findOfficersWithNoDirectReports(node.leftReport)];
    }

    if (node.rightReport) {
      values = [
        ...values,
        ...node.findOfficersWithNoDirectReports(node.rightReport),
      ];
    }

    if (!node.leftReport && !node.rightReport) {
      return [node.officerName];
    }
    console.log(values);
    return values;
  }

  listOfficersByExperience(officerNames = []) {
    if (this.rightReport) {
      officerNames = this.rightReport.listOfficersByExperience(officerNames);
    }

    officerNames.push(this.officerName);

    if (this.leftReport) {
      officerNames = this.leftReport.listOfficersByExperience(officerNames);
    }
    return officerNames;
  }

  // Input
  // Rank 1:                  10 Captain Picard
  //                        /                  \
  // Rank 2:        6 Commander Riker       11 Commander Data
  //                   /         \               \
  // Rank 3:    4 Lt. Cmdr.      7 Lt. Cmdr.     12 Lt. Cmdr.
  //             Worf           LaForge           Crusher
  //                   \                           \
  // Rank 4:      5 Lieutenant                  13 Lieutenant
  //               security-officer                    Selar

  // Output

  // {
  //   1: [ 'Captain Picard' ],
  //   2: [ 'Commander Riker', 'Commander Data' ],
  //   3: [ 'Lt. Cmdr. Worf', 'Lt. Cmdr. LaForge', 'Lt. Cmdr. Crusher' ],
  //   4: [ 'Lieutenant Security-Officer', 'Lieutenant Selar' ]
  // }

  listOfficersByRank(tree, rankedOfficers = {}) {
    // your solution here
    const q = new Queue();
    q.enqueue(tree);
    let node = q.dequeue();
    let rank = 1;
    let parent = node;

    while (node) {
      if (node.leftReport) {
        q.enqueue(node.leftReport);
      }

      if (node.rightReport) {
        q.enqueue(node.rightReport);
      }

      if (parent === node.reportTo) {
        rank++;
        parent = node;
      }

      if (rankedOfficers[rank]) rankedOfficers[rank].push(node.officerName);
      else rankedOfficers[rank] = [node.officerName];

      node = q.dequeue();
    }
    return rankedOfficers;
  }
}

module.exports = StarshipEnterprise;
