export async function load() {
    const possibleWords: string[] = ["Don't Give in", "Keep our Traditions", "The Main Opposition Party of Parliament", "Hack Club's last hope"];
    const chosenWordArray = Math.floor(Math.random() * possibleWords.length);
    const chosenWord = possibleWords[chosenWordArray];
	const memberIDs = ['U08R4SW3FU7'];

	const memberdeetsarray = [];

	for (const id of memberIDs) {
		const response = await fetch(`https://cachet.dunkirk.sh/users/${id}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch member ${id}: ${response.status}`);
		}

		const member = await response.json();
		memberdeetsarray.push(member);
	}
	return {
        newWord: chosenWord,
		memberArray: memberdeetsarray
    };
}