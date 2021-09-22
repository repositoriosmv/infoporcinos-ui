import useStyles from './styles'
import * as React from "react";

export interface AddressShowcaseProps {
  roadType?: string;
  numberVia?: string | number;
  viaAppend?: string;
  numberCrossing?: number | string;
  crossingAppend?: string;
  cornerMeters?: string | number;
  additional?: string;
}

function AddressShowcase({
  additional,
  cornerMeters,
  crossingAppend,
  numberCrossing,
  numberVia,
  roadType,
  viaAppend
}: AddressShowcaseProps) {
  const classes = useStyles()
  return (
    <div className={ classes.ShowcaseContainer }>
      <div className={ classes.AddressItem }>
        <span className={ classes.AddressField }>{roadType ?? 'Calle'}</span>
        <div className={ classes.AddressUnderline }></div>
        <p className={ classes.AddressLabel }>Tipo de Vía</p>
      </div>
      <div className={ classes.AddressItem }>
        <span className={ classes.AddressField }>{ numberVia ?? 48 }</span>
        <div className={ classes.AddressUnderline }></div>
        <p className={ classes.AddressLabel }>Nro. Vía</p>
      </div>
      <div className={ classes.AddressItem }>
        <span className={ classes.AddressField }>{ viaAppend ?? 'A' }</span>
        <div className={ classes.AddressUnderline }></div>
        <p className={ classes.AddressLabel }>Apendice <br /> de Vía</p>
      </div>
      <div className={ classes.AddressAppend }>#</div>

      <div className={ classes.AddressItem }>
        <span className={ classes.AddressField }>{numberCrossing ?? 77}</span>
        <div className={ classes.AddressUnderline }></div>
        <p className={ classes.AddressLabel }>Nro. Cruce</p>
      </div>
      <div className={ classes.AddressItem }>
        <span className={ classes.AddressField }>{ crossingAppend ?? 'B' }</span>
        <div className={ classes.AddressUnderline }></div>
        <p className={ classes.AddressLabel }>Apendice <br /> de Cruce</p>
      </div>
      <div className={ classes.AddressAppend }>-</div>
      <div className={ classes.AddressItem }>
        <span className={ classes.AddressField }>{ cornerMeters ?? 48 }</span>
        <div className={ classes.AddressUnderline }></div>
        <p className={ classes.AddressLabel }>Metros <br /> Esquina</p>
      </div>
      {additional && (
        <div className={ classes.AddressItem }>
          <span className={ classes.AddressField }>{ additional }</span>
          <div className={ classes.AddressUnderline }></div>
          <p className={ classes.AddressLabel }>Adicional</p>
        </div>
      )}
    </div>
  )
}

export default AddressShowcase