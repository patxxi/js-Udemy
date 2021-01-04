for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`Numero ${i} fizz buzz`);
		continue;
	} else if (i % 3 === 0) {
		console.log(`Numero ${i} fizz`);
		continue;
	} else if (i % 5 === 0) {
		console.log(`Numero ${i} buzz`);
		continue;
	}
	console.log(`Numero ${i}`);
}
