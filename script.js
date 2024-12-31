const users = [
    { name: 'Alice', balance: 1000, friends: ['Bob', 'Charlie'], skills: ['JavaScript', 'HTML', 'CSS'] },
    { name: 'Bob', balance: 500, friends: ['Alice', 'Diana'], skills: ['JavaScript', 'Python'] },
    { name: 'Charlie', balance: 1500, friends: ['Alice'], skills: ['JavaScript', 'React', 'CSS'] },
    { name: 'Diana', balance: 2000, friends: ['Bob'], skills: ['Python', 'Django'] }
];

const TotalBalance = users => users.reduce((total, user) => total + user.balance, 0);

const WithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

const FriendsCount = users => {
    return users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};

const UniqueSkills = users => {
    const unique = users.reduce((acc, user) => {
        user.skills.forEach(skill => {
            if (!acc.includes(skill)) {
                acc.push(skill);
            }
        });
        return acc;
    }, []);
    return unique.sort();
};

console.log(TotalBalance(users));
console.log(WithFriend(users, 'Alice'));
console.log(FriendsCount(users));
console.log(UniqueSkills(users));
