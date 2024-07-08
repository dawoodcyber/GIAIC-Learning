let user_names: string[] = [];


if (user_names.length < 1)
    console.log(`We need to find some users`);

    console.log("\n\tFilling array with random usernames:\n")


user_names = ["Ali", "Adnan", "Aslam", "Ashraf", "Akhtar", "Akram", "Admin"];

for (let i = 0; i < user_names.length; i++) {
    if (user_names[i] === "Admin") {
        console.log(`Welcome! ${user_names[i]}, would you like to see an updated report?.`);

    }

    console.log(`Welcome! ${user_names[i]}, hope you're good today.`);
}
