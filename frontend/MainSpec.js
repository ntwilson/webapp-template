import Main from './Main';

describe('Main', () => {
    it('renders some contents', () => {
        var renderedMain = new Main().render();

        expect(renderedMain.type).toBe('div');
        expect(renderedMain.props.className).toBe('row');
        expect(renderedMain.props.children.length).toBe(3);
        for (var element of renderedMain.props.children) {
            expect(element.type).toBe('div');
        }
        expect(renderedMain.props.children[0].props.children).toBe('hello');
    });
});