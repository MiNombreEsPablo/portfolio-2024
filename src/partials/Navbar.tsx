import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V17C21.75 20.65 19.65 22.75 16 22.75ZM8 2.75C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V7C20.25 4.14 18.86 2.75 16 2.75H8Z"
                  fill="#22d3ee"
                ></path>
                <path
                  d="M16.25 11.75H7.75C6.37 11.75 5.25 10.63 5.25 9.25V6.75C5.25 5.37 6.37 4.25 7.75 4.25H16.25C17.63 4.25 18.75 5.37 18.75 6.75V9.25C18.75 10.63 17.63 11.75 16.25 11.75ZM7.75 5.75C7.2 5.75 6.75 6.2 6.75 6.75V9.25C6.75 9.8 7.2 10.25 7.75 10.25H16.25C16.8 10.25 17.25 9.8 17.25 9.25V6.75C17.25 6.2 16.8 5.75 16.25 5.75H7.75Z"
                  fill="#22d3ee"
                ></path>
                <path
                  d="M7.99994 18.33C7.80994 18.33 7.61994 18.26 7.46994 18.11C7.17994 17.82 7.17994 17.34 7.46994 17.05L9.76993 14.75C10.0599 14.46 10.5399 14.46 10.8299 14.75C11.1199 15.04 11.1199 15.52 10.8299 15.81L8.52994 18.11C8.37994 18.26 8.18994 18.33 7.99994 18.33Z"
                  fill="#22d3ee"
                ></path>
                <path
                  d="M10.3297 18.36C10.1397 18.36 9.94971 18.29 9.79971 18.14L7.49973 15.84C7.20973 15.55 7.20973 15.07 7.49973 14.78C7.78973 14.49 8.26972 14.49 8.55972 14.78L10.8597 17.08C11.1497 17.37 11.1497 17.85 10.8597 18.14C10.7097 18.29 10.5197 18.36 10.3297 18.36Z"
                  fill="#22d3ee"
                ></path>
                <path
                  d="M16.51 16.3301C15.96 16.3301 15.5 15.8801 15.5 15.3301C15.5 14.7801 15.94 14.3301 16.49 14.3301H16.51C17.06 14.3301 17.51 14.7801 17.51 15.3301C17.51 15.8801 17.06 16.3301 16.51 16.3301Z"
                  fill="#22d3ee"
                ></path>
                <path
                  d="M14.4902 18.49C13.9402 18.49 13.4902 18.05 13.4902 17.5V17.48C13.4902 16.93 13.9402 16.48 14.4902 16.48C15.0402 16.48 15.4902 16.93 15.4902 17.48C15.4902 18.03 15.0402 18.49 14.4902 18.49Z"
                  fill="#22d3ee"
                ></path>
              </g>
            </svg>
          }
          name="Pablo's Portfolio"
        />
      </a>

      <NavMenu>
        {/* <NavMenuItem href="/posts/">Blogs</NavMenuItem> */}
        <NavMenuItem href="https://www.linkedin.com/in/pablobugueno/">
          LinkedIn
        </NavMenuItem>
        <NavMenuItem href="https://github.com/MiNombreEsPablo">
          GitHub
        </NavMenuItem>
        <NavMenuItem href="https://drive.google.com/file/d/1EvsCOHuvRdJQwN9LnIieJK_oc6FsOBr4/view?usp=sharing">
          Resume
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
