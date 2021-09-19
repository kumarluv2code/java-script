const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const checkAuthentication = (accounts) => {
let userId;
  accounts.map((account) => {
    userId = account.owner;
	  userId = userId.toLowerCase().split(' ').map((userLogin) => {
		  return userLogin[0];
	  }).join('');
	  account.userLogin = userId;
  })
	return userId;
}

//reduce is used to sum up all the values in an array in a single value 

const checkCurrentBalanceAndPrint = ((accounts, userLogin) => {
	let calclBalance;
	let Mainbalance = accounts.map((account) => {
		if (account.userLogin === checkAuthentication(accounts)) {
			console.log(`${account.owner} HAS LOGIN ${account.userLogin} AND IS A VALID USER`)
			calclBalance = account.movements.reduce((accumulator, current) => {
				return calclBalance = accumulator + current;
				
			}, 0)
			return calclBalance;
		}
		return calclBalance;
	});
	return calclBalance;
})
const accountBalanceMain = checkCurrentBalanceAndPrint(accounts, 'ss')