import { Editor2 } from "@/app/_components/focus-plugin";
import { GlobeAltIcon, PhotoIcon } from "@heroicons/react/16/solid";

export default function UserProfile() {
  return (
    <main>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">About me</label>
        <div className=" mt-2 border border-solid border-gray-200">
          <Editor2 />
        </div>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Timezone</label>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
         gap-1 
         bg-gray-200 px-2 py-1 text-gray-700
          hover:bg-gray-400 hover:text-white
         "
          title="TBA"
        >
          <GlobeAltIcon className=" h-5 w-5" />
          Use Current Timezone
        </button>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Location</label>
        <input
          type="text"
          className=" mt-2 block w-1/2 border border-solid border-gray-200 px-2 py-1 text-gray-700
          focus:border-sky-600 focus:outline-none"
        />
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">Web Site</label>
        <input
          type="text"
          className=" mt-2 block w-1/2 border border-solid border-gray-200 px-2 py-1 text-gray-700
          focus:border-sky-600 focus:outline-none"
        />
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Profile Header
        </label>
        <div className=" relative mt-2 h-56 w-80 bg-gray-400">
          <button
            className=" disabled absolute left-2 top-2 cursor-not-allowed  bg-gray-200 p-2
         text-gray-700  hover:bg-gray-400 hover:text-white"
            title="TBA"
          >
            <PhotoIcon className=" h-5 w-5" />
          </button>
        </div>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          User Card Background
        </label>
        <div className=" relative mt-2 h-56 w-80 bg-gray-400">
          <button
            className=" disabled absolute left-2 top-2 cursor-not-allowed  bg-gray-200 p-2
         text-gray-700  hover:bg-gray-400 hover:text-white"
            title="TBA"
          >
            <PhotoIcon className=" h-5 w-5" />
          </button>
        </div>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Featured Topic
        </label>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
         gap-1 
         bg-gray-200 px-2 py-1 text-gray-700
          hover:bg-gray-400 hover:text-white
         "
          title="TBA"
        >
          Select a New Topic
        </button>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Featured Topic
        </label>
        <button
          className=" disabled mt-2 flex cursor-not-allowed flex-row items-center
         gap-1 
         bg-gray-200 px-2 py-1 text-gray-700
          hover:bg-gray-400 hover:text-white
         "
          title="TBA"
        >
          Select a New Topic
        </button>
      </section>
      <section className=" mt-8">
        <label className=" text-xl font-bold text-gray-500">
          Featured Topic
        </label>
        <div className=" mt-2 flex flex-row gap-1">
          <select
            id="month"
            name="month"
            className=" border border-solid border-gray-200 text-gray-700
           focus:border-sky-600 focus:outline-none"
          >
            <option value="" selected>
              {""}
            </option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            id="day"
            name="day"
            className=" border border-solid border-gray-200 text-gray-700
           focus:border-sky-600 focus:outline-none"
          >
            <option value="" selected>
              {""}
            </option>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>
      </section>
      <section className=" mt-8">
        <button
          className=" disabled cursor-not-allowed bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
          title="TBA"
        >
          Save Changes
        </button>
      </section>
    </main>
  );
}
