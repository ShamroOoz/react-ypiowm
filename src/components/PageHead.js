import { Page } from '@comeon/comeon-backoffice-ui';

const PageHead = ({ children }) => {
  return (
    <Page className="page-header" title="CC BIN Routing">
      {children}
    </Page>
  );
};

export default PageHead;