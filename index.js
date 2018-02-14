function calcInterest(sum, interest, days, period = 365) {
	const pPrime = sum*Math.pow((1+(interest/100)/period), days)
	return pPrime
}
module.exports = calcInterest
