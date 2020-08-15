"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = require("react");
var event_listener_1 = require("@use-it/event-listener");
var ThemeProvider_1 = require("@material-ui/styles/ThemeProvider");
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var core_1 = require("@material-ui/core");
var lib_1 = require("gatsby-plugin-next-seo/lib");
var gatsby_1 = require("gatsby");
var header_1 = require("@Components/structure/Layout/header");
var cursor_1 = require("@Components/elements/Cursor/cursor");
var use_cursor_pos_1 = require("@Utils/hooks/use-cursor-pos");
var use_dark_mode_1 = require("@Utils/hooks/use-dark-mode");
var back_to_top_1 = require("@Components/elements/BackToTop/back-to-top");
var material_theme_1 = require("@Config/material-theme");
var footer_1 = require("@Components/structure/Layout/footer");
var layout_mod_scss_1 = require("./layout.mod.scss");
require("@Styles/index.global.scss");
var GlobalStyles = withStyles_1.default(function (theme) { return ({
    '@global': {
        '::-webkit-scrollbar': {
            width: '7px',
        },
        '::-webkit-scrollbar-track': {
            borderRadius: '3px',
            boxShadow: "inset -1px 3px 5px 1px " + theme.palette.background.paper,
            backgroundColor: theme.palette.background.paper,
        },
        '::-webkit-scrollbar-thumb': {
            borderLeft: "1px solid " + theme.palette.primary[theme.palette.type],
            borderRadius: '3px',
            backgroundColor: theme.palette.grey['300'],
            boxShadow: "3px 0px 4px 6px " + theme.palette.text.hint,
        },
        ':root': {
            // firefox
            'scrollbar-width': 'thin',
            'scrollbar-color': theme.palette.primary.main + " " + theme.palette.grey['300'],
            '--herb-text-color': theme.palette.text.primary,
        },
    },
}); })(function () { return null; });
function Layout(_a) {
    var _b;
    var children = _a.children;
    var _c = use_cursor_pos_1.useCursorPosition(), x = _c[0], y = _c[1];
    var mainContainerRef = react_1.useRef(null);
    var _d = react_1.useState(false), isCursorDown = _d[0], setCursorDown = _d[1];
    var handleMouseClick = react_1.useCallback(function () {
        setCursorDown(function (prevState) { return !prevState; });
    }, []);
    event_listener_1.default('mouseup', handleMouseClick, (_b = mainContainerRef === null || mainContainerRef === void 0 ? void 0 : mainContainerRef.current) !== null && _b !== void 0 ? _b : undefined);
    var isDarkMode = use_dark_mode_1.useDarkMode().themeMode.isDarkMode;
    var materialTheme = react_1.useMemo(function () { return material_theme_1.createMaterialTheme(isDarkMode); }, [isDarkMode]);
    var file = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query LOGO_IMG {\n      file(relativePath: { eq: \"logo.png\" }) {\n        publicURL\n      }\n    }\n  "], ["\n    query LOGO_IMG {\n      file(relativePath: { eq: \"logo.png\" }) {\n        publicURL\n      }\n    }\n  "])))).file;
    var currentDate = new Date();
    return (<ThemeProvider_1.default theme={materialTheme}>
      <lib_1.LocalBusinessJsonLd type='CafeOrCoffeeShop' id='https://www.novelteaorlando.com' name='Novel Tea Cafe' description='Gather for fresh kava and kratom tea, fresh brewed kombucha, and daily social events. What could be better? Answer: Nothing!' url='https://www.novelteaorlando.com' telephone='+14088717984' priceRange={'$'} defer={true} openingHours={{
        dayOfWeek: [
            'Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat',
            'Sun',
        ],
        closes: '12am',
        opens: '12pm',
        validFrom: currentDate.toLocaleString(),
        validThrough: new Date(currentDate.setMonth(currentDate.getMonth() + 4)).toLocaleString(),
    }} address={{
        streetAddress: '157 Lake Howell Ln',
        addressLocality: 'Maitland',
        addressRegion: 'FL',
        postalCode: '32751',
        addressCountry: 'US',
    }} geo={{
        latitude: '28.6329066',
        longitude: '-81.3230062',
    }} images={[
        //todo add more
        file.publicURL,
    ]} overrides={{
        '@type': 'CafeOrCoffeeShop',
        'hasMenu': 'https://novelteaorlando.com/menu',
    }}/>
      <div className={layout_mod_scss_1.default.wrapper} ref={mainContainerRef}>
        <core_1.Container className={layout_mod_scss_1.default.mainContainer} maxWidth={false} disableGutters>
          <cursor_1.Cursor x={x} y={y} mouseUp={isCursorDown}/>
          <header_1.Header />
          <main style={{
        minHeight: '60vh',
        position: 'relative',
    }} id={'herb-main'}>
            {children}
          </main>
          <footer_1.Footer />
          <GlobalStyles />
          <core_1.CssBaseline />
        </core_1.Container>
        <back_to_top_1.BackToTop />
      </div>
    </ThemeProvider_1.default>);
}
exports.Layout = Layout;
var templateObject_1;
