export const calculateRewards = value => {
    const amountSpent = parseInt(value);
    let bonus = 0;
    if(amountSpent > 50 && amountSpent <= 100) {
        bonus = (amountSpent - 50) * 2;
    } else if (amountSpent > 100) {
        bonus = (50 * 1) + (amountSpent - 100) * 2;
    };
    return bonus;
}