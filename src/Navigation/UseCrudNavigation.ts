import {useNavigate} from "react-router-dom";
import {useDispatch} from "wbox-context";
import {ModuleConfiguration} from "../Modules/ModuleConfiguration";
import {ModalActions} from "../Data/Reducers/ModalAction";

export const useCrudNavigation = () => {
    const pageNavigate = useNavigate();
    const dispatch = useDispatch();
    const navigate = (module: ModuleConfiguration) => {
        if (module.navigationType === "page") {
            pageNavigate(module.route!);
        } else if (module.navigationType === "modal") {
            dispatch(ModalActions.open(module.name));
        } else {
            throw new Error(`unknown navigation type: ${module.navigationType}`);
        }
    }
    return {navigate};
}