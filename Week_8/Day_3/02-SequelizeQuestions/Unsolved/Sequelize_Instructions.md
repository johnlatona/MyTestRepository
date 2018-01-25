* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?

	  ORM 

  	- Answer: What advantages does it offer?

	  Don't have to write ORM's from scratch -- speed to developing minimal viable product
	  easy model creation
	  promise based
	  prototyping
	  Complex SQL queries in simple syntax.
	  Validation
	  Easy to test

  	- Answer: How do I install it? How do I incorporate it into my app?

	  npm install sequelize

	  # And one of the following:
		$ npm install --save pg@6 pg-hstore #pg@7 is currently not supported
		$ npm install --save mysql2
		$ npm install --save sqlite3
		$ npm install --save tedious // MSSQL
	
	Incorporation: 
	
	const Sequelize = require('sequelize');
	const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},

	// SQLite only
	storage: 'path/to/database.sqlite'
	});

	// Or you can simply use a connection uri
	const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

  	- Answer: What the heck is a Sequelize model? What role will it play?

	  Defines how the table is set up. An object representation of your table.

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

		  var table = sequelize.define("countries", {
			  Country: {
				  type: Sequelize.STRING
			  },
			  PhoneCode: {
				  type: Sequelize.INTEGER
			  },
			  Capital: {
				  type: Sequelize.STRING
			  },
			  IndependeceYear: {
				  type: Sequelize.STRING
			  }
		  });

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
