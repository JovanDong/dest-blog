 function afterburner (siteData) {
  const { page, theme } = siteData;
  const { custom } = theme;

  if (page.path === '/') {
    const { custom: customTheme } = custom;
    const { footer } = customTheme;

    footer.record = `<a href="https://example.com/link">${footer.record}</a>`;
  }
}

module.exports = {afterburner: afterburner};