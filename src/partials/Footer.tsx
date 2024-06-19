import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    {/* <FooterCopyright site_name={AppConfig.site_name} /> */}
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        © Copyright 2024 by Pablo Bugueño.
      </div>
    </div>
  </Section>
);

export { Footer };
