<template>
  <div style="background: transparent" class="container section section-4 inv">
    <div class="agenda text-left">
      <div class="table">
        <div class="thead">
          <div class="tr">
            <div class="th idx">
              <div>
                <p>{{ $t("time") }}</p>
              </div>
            </div>
            <div class="th" colspan="4">
              <div>
                <p>{{ $t("track") }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tbody">
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time1") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>{{ $t("track1") }}</p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time2") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>{{ $t("track2") }}</p>
              </div>
            </div>
          </div>

          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time3") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="color: #ff9b00; font-weight: bold"
                    >{{ $t("track3") }}:
                  </span>
                  <span style="font-weight: bold">“{{ $t("track3-1") }}” </span>
                  {{ $t("track3-2") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time4") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="color: #ff9b00; font-weight: bold"
                    >{{ $t("track4") }}:
                  </span>
                  <span style="font-weight: bold">“{{ $t("track4-1") }}” </span>
                  {{ $t("track4-2") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time5") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">“{{ $t("track5") }}” </span>
                  {{ $t("track5-1") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time6") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">“{{ $t("track6") }}” </span>
                  {{ $t("track6-1") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time7") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">{{ $t("track7") }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time8") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">“{{ $t("track8") }}” </span>
                  {{ $t("track8-1") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time9") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">“{{ $t("track9") }}” </span>
                  {{ $t("track9-1") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time10") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">“{{ $t("track10") }}” </span>
                  {{ $t("track10-1") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time11") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">{{ $t("track11") }} </span>
                  {{ $t("track11-1") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time12") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">“{{ $t("track12") }}” </span>
                  {{ $t("track12-1") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{ $t("time13") }}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold">“{{ $t("track13") }}” </span>
                  {{ $t("track13-1") }}
                </p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>{{$t('time14')}}</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>
                  <span style="font-weight: bold"
                    >“{{$t('track14')}}”
                  </span>
                  {{$t('track14-1')}}
                </p>
              </div>
            </div>
          </div>

          <!-- <div class="tr gap">
            <div class="td idx">
              <div>
                <p>1:10 PM - 2:10 PM</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>Sessions: TBD</p>
              </div>
            </div>
          </div>

          <div class="tr">
            <div class="td idx">
              <div>
                <p>3:00 PM - 3:40 PM</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>Tea Break</p>
              </div>
            </div>
          </div>
          <div class="tr gap">
            <div class="td idx">
              <div>
                <p>3:40 PM - 3:50 PM</p>
              </div>
            </div>

            <div class="td" colspan="4">
              <div>
                <p>Sessions: TBD</p>
              </div>
            </div>
          </div>
          <div class="tr">
            <div class="td idx">
              <div>
                <p>04:40 PM - 5:20 PM</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>Launch</p>
              </div>
            </div>
          </div>
          <div class="tr gap">
            <div class="td idx">
              <div>
                <p>5:20 PM - 5:45 PM</p>
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <p>Sessions, Workshops, AWS Game Day: TBD</p>
              </div>
            </div>
          </div> -->

          <div class="tr">
            <div class="td idx">
              <div>
                <!-- <p>04:40 PM - 5:20 PM</p> -->
              </div>
            </div>
            <div class="td" colspan="4">
              <div>
                <!-- <p>Closing Note</p> -->
                <p>{{$t('track15')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
