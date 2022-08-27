# wbox-crud


## Plan

- Configuration
- Modal Management
- Modules
- Defaults



## Structure

    <Router>
        <ModalProvider>
            <Routes />
            <Modal />
        </ModalProvider>
    </Router>



## Navigation

    const { navigate } = useCrudNavigator();
    navigate({});