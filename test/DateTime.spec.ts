import { DateTime } from '../src/DateTime';
describe('Datetime', () => {
  const dateTime: DateTime = new DateTime();

  it('should return today date in ddMMyyy format', () => {
    //given
    spyOn(dateTime, 'today').and.returnValue(new Date('2019-08-03T03:24:00'));
    //when
    const todayStr = dateTime.todayToString();
    //then
    expect(todayStr).toEqual('03/08/2019');
  })
})
