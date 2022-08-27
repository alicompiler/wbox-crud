import {useFactories} from "../FactoryProvider/FactoryProvider";

interface Props {
    options: unknown;
}

export function FormModule({options}: Props) {
    const {formFactory} = useFactories();
    return formFactory.create(options);
}