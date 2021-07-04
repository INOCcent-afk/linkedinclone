import Box from "../components/Box";
import LeftPanel from "../containers/LeftPanel";
import RightPanel from "../containers/RightPanel";
import CenterPanel from "../containers/CenterPanel";

export default function Home() {
  return (
    <>
      <LeftPanel>
        <Box>
          <h1>HELLO WORLD</h1>
        </Box>
        <Box>
          <h1>HELLO WORLD</h1>
        </Box>
      </LeftPanel>
      <CenterPanel>
        <Box>
          <h1>TEST</h1>
        </Box>
        <Box>
          <h1>TEST</h1>
        </Box>
        <Box>
          <h1>TEST</h1>
        </Box>
        <Box>
          <h1>TEST</h1>
        </Box>
        <Box>
          <h1>TEST</h1>
        </Box>
        <Box>
          <h1>TEST</h1>
        </Box>
        <Box>
          <h1>TEST</h1>
        </Box>
        <Box>
          <h1>TEST</h1>
        </Box>
      </CenterPanel>
      <RightPanel>
        <Box>
          <h1>YEST</h1>
        </Box>
      </RightPanel>
    </>
  );
}
