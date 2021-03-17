(() => {
  const playing = true;
  let activefield = 1;

  const getfield = (index) => document.getElementById(`field${index}`);
  const deactivatefield = (index) => { getfield(index).className = 'field'; };
  const activatefield = (index) => { getfield(index).className = 'field field_has-goblin'; };
  const next = () => setTimeout(() => {
    if (!playing) {
      return;
    }
    deactivatefield(activefield);
    activefield = Math.floor(1 + (Math.random() * 16));
    activatefield(activefield);
    next();
  }, 800);

  next();
})();
