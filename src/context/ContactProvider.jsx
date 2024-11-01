import { createContext } from "react";

const ContactProvider = createContext([
        {name: "Timmy", lastOnline: 5, email: "Jimmy@test.com", phone: "1234567890"},
        {name: "Bobby", lastOnline: 2, email: "Bobby@test.com", phone: "5555555555"},
        {name: "Johnny", lastOnline: 13, email: "Johnny@test.com", phone: "1010101010"}
    ]);

export default ContactProvider

