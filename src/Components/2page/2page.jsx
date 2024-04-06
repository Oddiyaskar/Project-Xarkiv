import Bosh from "./Bosh/Bosh";
import Mebel from "./Mebel/Mebel";
import Narx from "./Narx/Narx";
import Tovar from "./Tovar/Tovar";
import Obuna from "../1page/Obuna/Obuna";

function TwoPage () {
    return (
        <>
            <Bosh />
            <Mebel />
            <Narx />
            <Tovar />
            <Obuna />
        </>
    )
}

export default TwoPage;