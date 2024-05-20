const csv = require('csv-parser');

exports.validateCsv = (req, res, next) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: 'CSV file is required' });
  }

  const results = [];
  fs.createReadStream(file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      if (!results.length) {
        return res.status(400).json({ message: 'CSV file is empty' });
      }
      next();
    })
    .on('error', (error) => res.status(400).json({ message: error.message }));
};
