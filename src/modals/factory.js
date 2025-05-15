import dynamic from 'next/dynamic'

const Full = dynamic(() => import('../modals/full'), { ssr: false });

export const createFullModal = ({ device }) => (
  {
    content: ({ data }) => (
      <Full
        data={data}
        text="text"
        text1="text1"
        text2="text2"
      />
    ),
    style: device !== 'smartphone' ? {
      maxWidth: 520,
      maxHeight: 560,
    } : null,
  }
);

const Simple = dynamic(() => import('../modals/simple'), { ssr: false });

export const createSimpleModal = ({ device }) => (
  {
    content: ({ data }) => (
      <Simple
        data={data}
        text="text"
        text1="text1"
        text2="text2"
      />
    ),
    style: device !== 'smartphone' ? {
      maxWidth: 520,
      maxHeight: 560,
    } : null,
  }
);

const Header = dynamic(() => import('../modals/header'), { ssr: false });

export const createHeaderModal = ({ device }) => (
  {
    content: ({ data }) => (
      <Header
        data={data}
        text="text"
        text1="text1"
        text2="text2"
      />
    ),
    style: device !== 'smartphone' ? {
      maxWidth: 520,
      maxHeight: 560,
    } : null,
  }
);

const Footer = dynamic(() => import('../modals/footer'), { ssr: false });

export const createFooterModal = ({ device }) => (
  {
    content: ({ data }) => (
      <Footer
        data={data}
        text="text"
        text1="text1"
        text2="text2"
      />
    ),
    style: device !== 'smartphone' ? {
      maxWidth: 520,
      maxHeight: 560,
    } : null,
  }
);