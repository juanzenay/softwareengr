const today = new Date()
const data = {'resnum':1, 'peoplenum': 1, 'date': today.getDate()+'-'+ today.getMonth() + '-' + today.getFullYear(), 'time':`${today.getHours()}:00`};
    

const getReservations = async (req, res, next) => {
	try {
		res.json(await data);
	} catch(error) {
		next(error);
	}
};

const getReservation = async (req, res, next) => {
	try {
		if(Array.isArray(data) && data.length === 0)
			res.status(404).send('Not Found');
		else
			res.json(await data);
			
	} catch (error) {
		next(error);
	}
};

module.exports = {
  getReservations,
  getReservation
};
