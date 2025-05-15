import { EuiProvider, EuiButton } from '@elastic/eui'

export function App() {
  const handleClick = () => {
    alert('EUI Button clicked!')
  }

  return (
    <EuiProvider colorMode='light'>
      <div style={{ padding: '20px' }}>
        <EuiButton onClick={handleClick} color='primary'>
          Click me!
        </EuiButton>
      </div>
    </EuiProvider>
  )

}

export default App
