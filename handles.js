export const keyPressAction = (event, action, ...params) => { if (event === undefined || event.key === ' ' || event.key === 'Enter') action(...params); };

export const handleCheckSwitch = (setValue) => (value) =>  {
    setValue(value);
}