import { ElementRef } from "@angular/core";
import { NumbersOnlyDirective } from "./numbers-only.directive";

class MockElementRef extends ElementRef {
  constructor(value: string) {
    super(null);
    this.nativeElement = { value };
  }
}

const mockElementNonNumeric = new MockElementRef('829dom');
const mockElementNumeric = new MockElementRef('829');

const mockEvent = { stopPropagation: jest.fn() };

describe('NumbersOnlyDirective', () => {
  let directive: NumbersOnlyDirective;

  it('should  create an instance', () => {
    directive = new NumbersOnlyDirective(mockElementNumeric);
    expect(directive).toBeTruthy();
  });

  it('should NOT call stop propagation if the input only contains numbers', () => {
    directive = new NumbersOnlyDirective(mockElementNumeric);
    directive.onInputChange(mockEvent as any);

    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(0);
  });

  it('should call stop propagation if the input NON contains numbers', () => {
    directive = new NumbersOnlyDirective(mockElementNonNumeric);
    directive.onInputChange(mockEvent as any);

    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
  });

  it('should remove NON numeric characters from input if there are ', () => {
    directive = new NumbersOnlyDirective(mockElementNonNumeric);
    directive.onInputChange(mockEvent as any);
    const inputValue = directive['elRef'].nativeElement.value;

    expect(inputValue).toBe('829');
  });



});