import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import ComposedIcon from '../ComposedIcon/ComposedIcon';

import './ComposedIconPreview.css';

class ComposedIconPreview extends Component {

  render() {
    const { props } = this.props;

    return (
      <div className="ComposedIconPreview__container">
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<ComposedIcon
            props={props}
            color="primary"
            size='small'
            icon='server'
            extraIcon='dharmachakra'/>}>
          Sample
        </Button>

        <br />

        <Button
          variant="contained"
          color="default"
          size="medium"
          startIcon={<ComposedIcon
            props={props}
            color="default"
            size="medium"
            icon='server'
            extraIcon='dharmachakra'/>}>
          Sample
        </Button>

        <br />

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<ComposedIcon
            props={props}
            color="primary"
            size="large"
            icon='server'
            extraIcon='dharmachakra'/>}>
          Sample
        </Button>

        <br />

        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<ComposedIcon
            props={props}
            color="secondary"
            size='small'
            icon='server'
            extraIcon='dharmachakra'/>}>
          Sample
        </Button>

        <br />

        <Button
          variant="contained"
          color="secondary"
          size="medium"
          startIcon={<ComposedIcon
            props={props}
            size="medium"
            color="secondary"
            icon='server'
            extraIcon='dharmachakra'/>}>
          Sample
        </Button>

        <br />

        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<ComposedIcon
            props={props}
            color="secondary"
            size="large"
            icon='server'
            extraIcon='dharmachakra'/>}>
          Sample
        </Button>

        <br />

        <IconButton aria-label="sample-icon-button">
          <ComposedIcon
            props={props}
            size="large"
            icon='server'
            extraIcon='dharmachakra'/>
        </IconButton>

        <br />

        <IconButton aria-label="sample-icon-button">
          <ComposedIcon
            props={props}
            size="small"
            icon='server'
            extraIcon='dharmachakra'/>
        </IconButton>

        <br />

        <Fab variant="extended">
          <ComposedIcon
            props={props}
            size="small"
            icon='server'
            extraIcon='dharmachakra'/>
          Sample
        </Fab>

        <br />

        <Fab disabled aria-label="like">
          <ComposedIcon
            props={props}
            size="large"
            disabled
            icon='server'
            extraIcon='dharmachakra'/>
        </Fab>

        <br />

        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ComposedIcon
                  props={props}
                  size="small"
                  icon='server'
                  extraIcon='dharmachakra'/>
              </InputAdornment>
            ),
          }}
        />

        <br />

        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          disabled
          defaultValue="disabled field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ComposedIcon
                  props={props}
                  size="small"
                  icon='server'
                  extraIcon='dharmachakra'/>
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
}

ComposedIconPreview.propTypes = {
  props: PropTypes.object.isRequired,
};

export default ComposedIconPreview;