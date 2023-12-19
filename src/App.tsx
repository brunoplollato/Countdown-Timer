import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Counter from "./components/Counter";

function App() {
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 3);
  const [value, setValue] = useState<Date>(defaultDate);
  const minDate = new Date().toISOString().split("T")[0];

  return (
    <div className="App">
      <Input
        type="date"
        label="Date"
        value={value?.toLocaleDateString("en-CA")}
        name="date"
        placeholder=""
        error={false}
        disabled={false}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(new Date(event.target.value))
        }
        min={minDate}
      />
      <Counter date={value} />
    </div>
  );
}

export default App;
