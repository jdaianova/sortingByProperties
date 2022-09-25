import orderByProps from '../orderByProps';

test.each([[{
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
}, ['name', 'level'], [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
]], [{
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
}, ['attack', 'defence', 'name'], [
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'name', value: 'мечник' },
  { key: 'health', value: 10 },
  { key: 'level', value: 2 },
]], [{
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
}, ['health', 'name', 'attack', 'defence'], [
  { key: 'health', value: 10 },
  { key: 'name', value: 'мечник' },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'level', value: 2 },
]]])('check sorting by properties', (character, props, expected) => {
  expect(orderByProps(character, props)).toEqual(expected);
});
