import { AppRegistry } from "react-native";
import {name as appName} from '.app.json';

import navegacao from "./navegacao";

AppRegistry.registerComponent(appName, () => navegacao);