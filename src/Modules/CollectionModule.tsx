import {DefaultCollectionFactory} from "wb-collections";
import {ModuleConfiguration} from "./ModuleConfiguration";

interface Props {
    module: ModuleConfiguration;
}

export function CollectionModule({module}: Props) {
    const factory = new DefaultCollectionFactory();
    return factory.create(module.options as any);
}