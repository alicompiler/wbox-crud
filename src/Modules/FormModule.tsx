import {defaultFieldsMap, DefaultFormFactory} from "wb-forms";
import {FormOptions} from "wb-forms/dist/Factory/DefaultFormFactoryConfiguration";
import {ModuleConfiguration} from "./ModuleConfiguration";

interface Props {
    module: ModuleConfiguration;
}

export function FormModule({module}: Props) {
    const formFactory = new DefaultFormFactory(defaultFieldsMap);
    const configuration = module.options;
    return formFactory.create(configuration as FormOptions);
}