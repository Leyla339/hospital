import React, { useEffect, useState } from "react";
import "./OnlineRequest.css";
import { toast } from "react-toastify";

const OnlineRequest = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [availableDays, setAvailableDays] = useState([]);
  const [availableHours, setAvailableHours] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    doctorId: "",
    doctorName: "",
    day: "",
    time: "",
  });

  useEffect(() => {
    fetch("https://68382ee12c55e01d184c4c5c.mockapi.io/api/hospital/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const generateTimeSlots = (hoursString) => {
    if (!hoursString) return [];
    const [start, end] = hoursString.split(" - ");
    const [startHour] = start.split(":").map(Number);
    const [endHour] = end.split(":").map(Number);

    const slots = [];
    for (let h = startHour; h < endHour; h++) {
      slots.push(`${h.toString().padStart(2, "0")}:00`);
      slots.push(`${h.toString().padStart(2, "0")}:30`);
    }
    return slots;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "doctorId") {
      const selected = doctors.find((doc) => doc.id === parseInt(value));
      setSelectedDoctor(selected);
      setAvailableDays(selected?.workingDays || []);
      setAvailableHours([]);
      setFormData((prev) => ({
        ...prev,
        doctorId: value,
        doctorName: selected?.name || "",
        day: "",
        time: "",
      }));
    }

    if (name === "day" && selectedDoctor) {
      const hours = generateTimeSlots(selectedDoctor.workingHours);
      setAvailableHours(hours);
      setFormData((prev) => ({ ...prev, time: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://683ca83f199a0039e9e310e7.mockapi.io/api/hospital/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("Müraciət uğurla göndərildi!");
        setFormData({
          name: "",
          phone: "",
          doctorId: "",
          doctorName: "",
          day: "",
          time: "",
        });
        setSelectedDoctor(null);
        setAvailableDays([]);
        setAvailableHours([]);
      })
      .catch(() => toast.error("Xəta baş verdi."));
  };

  return (
    <div className="request-page">
      <h1>Həkimə Online Müraciət</h1>
      <p>Aşağıdakı formanı dolduraraq istədiyiniz həkimə müraciət edin.</p>
      <form onSubmit={handleSubmit} className="request-form">
        <input
          type="text"
          name="name"
          placeholder="Ad və soyad"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Əlaqə nömrəsi"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="doctorId"
          value={formData.doctorId}
          onChange={handleChange}
          required
        >
          <option value="">Həkim seçin</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name} – {doc.department}
            </option>
          ))}
        </select>

        {availableDays.length > 0 && (
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            required
          >
            <option value="">Gün seçin</option>
            {availableDays.map((day, idx) => (
              <option key={idx} value={day}>
                {day}
              </option>
            ))}
          </select>
        )}

        {availableHours.length > 0 && (
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Saat seçin</option>
            {availableHours.map((time, idx) => (
              <option key={idx} value={time}>
                {time}
              </option>
            ))}
          </select>
        )}

        <button type="submit">Qəbula yazıl</button>
      </form>
    </div>
  );
};

export default OnlineRequest;
