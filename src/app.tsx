import * as React from 'react'
import { webFrame } from 'electron'

// Disable pinch zoom
webFrame.setZoomLevelLimits(1, 1)

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>
      </div>
    );
  }
}
