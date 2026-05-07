let role = "Non-Subscriber";
let accessType;

switch (role) {
    case "Employee":
        accessType = "Full access to Dietary Services";
        break;
    case "Enrolled Member":
        accessType = "Full access to Dietary Services and one-on-one interaction with a dietician"
        break;
    case "Subscriber":
        accessType = "Partial access to facilitate Dietary Services"
        break;
    case "Non-Subscriber":
        accessType = "access after enrolling or at least subscribing first to avail this facility"
        break;
    default:
        accessType = "Invalid Role";
}

console.log("You are authorized to have " + accessType);