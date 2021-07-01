import { mount } from 'enzyme';
import StyledButtonComponent from "./styledButton.component";

describe('Styled Button Component', () => {
  let wrapper;
  const setup = () => mount(<StyledButtonComponent />)


  const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
  }

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render the styled button component without errors', () => {
    const btnComponent = findByAttr(wrapper, 'component-styled-button');
    expect(btnComponent).toHaveLength(1);
  });

  it('should allow user to click on the styled button', () => {
    const btnComponent = findByAttr(wrapper, 'component-styled-button');
    btnComponent.simulate('click', { preventDefault() {}})
    const pTag = findByAttr(wrapper, 'text-tag');
    expect(pTag.render().text()).toBe('Lorem Ipsum')
  });
});