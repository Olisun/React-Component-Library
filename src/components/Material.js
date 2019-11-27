import React from 'react';
import Button from '@material-ui/core/Button';

function MaterialButton() {
  const styles = {
    marginLeft: '50px',
    marginRight: '50px',
    marginTop: '5px',
    marginBottom: '10px',
  }

  return (
    <div style={styles}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default MaterialButton;