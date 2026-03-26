const logger = (req, res, next) => {
	const start = Date.now();

	res.on("finish", () => {
		const duration = Date.now() - start;
		const now = new Date();
		const timestamp = now.toISOString().replace("T", " ").substring(0, 19);

		console.log(
			`[${timestamp}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`,
		);
	});

	next();
};

export default logger;
