import { DateTime } from '../src/DateTime';
describe('Datetime', () => {
  const dateTime: DateTime = new DateTime();

  it('should return today date in ddMMyyy format', () => {
    spyOn(dateTime, 'today').and.returnValue(new Date(new Date('2019-08-03T03:24:00')));
    const todayStr = dateTime.todayToString();
    expect(todayStr).toEqual('03/08/2019');
  })
})
