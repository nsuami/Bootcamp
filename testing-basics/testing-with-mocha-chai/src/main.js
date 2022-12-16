function averageScore(scores) {
  const sum = scores.reduce((total, element) => {
    total += element.score;
    return total;
  }, 0);
  return Number((sum / scores.length).toFixed(1));
}

module.exports = averageScore;
