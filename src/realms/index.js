import Realm from "realm";
import { User } from "./user";

export default function() {
    return new Realm({ schema: [User] });
}
