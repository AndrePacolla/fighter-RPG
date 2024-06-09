const char = createKinight('Justiceiro');
const monster = createLittleMonter();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);