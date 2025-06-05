export function getPointsBar(currentPoints, pointsToNextLevel, barLength = 10) {
    const progress = Math.min(currentPoints / pointsToNextLevel, 1);
    const filledBlocks = Math.round(progress * barLength);
    const emptyBlocks = barLength - filledBlocks;
    return '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);
}
